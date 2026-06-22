import { useEffect, useRef } from "react";

export default function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    } catch (e) {
      console.warn("WebGL not supported in this browser:", e);
    }

    if (!gl) return;

    // Sizing
    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }
    syncSize();

    const resizeObserver = new ResizeObserver(() => {
      syncSize();
    });
    resizeObserver.observe(canvas);

    // Vertex Shader
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader (Matching the beautiful flow in the mock HTML)
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        float t = u_time * 0.15;
        
        vec3 color1 = vec3(0.063, 0.078, 0.082); // #101415 (Executive Slate theme background)
        vec3 color2 = vec3(0.114, 0.125, 0.133); // #1D2022 (Surface color)
        vec3 accent_ind = vec3(0.388, 0.400, 0.945); // #6366F1 (Indigo Accent)
        vec3 accent_purp = vec3(0.545, 0.361, 0.965); // #8B5CF6 (Purple Accent)
        
        // High quality gradient waves
        float noise1 = sin(uv.x * 2.5 + t) * cos(uv.y * 1.8 - t * 0.4);
        float noise2 = sin(uv.y * 3.2 - t * 0.6) * cos(uv.x * 1.2 + t * 0.8);
        
        float mask = smoothstep(-0.8, 0.8, noise1 + noise2);
        vec3 finalColor = mix(color1, color2, mask * 0.45);
        
        // Dynamic mouse guidance
        vec2 normMouse = u_mouse / u_resolution;
        float distToMouse = length(uv - normMouse);
        float mouseGlow = smoothstep(0.28, 0.0, distToMouse) * 0.08;
        finalColor += accent_ind * mouseGlow;
        
        // Subtle ambient glowing pulsing circles at edges
        float pulse = sin(u_time * 0.4) * 0.5 + 0.5;
        
        float dist1 = length(uv - vec2(0.85, 0.15));
        float glow1 = smoothstep(0.55, 0.0, dist1) * pulse * 0.12;
        finalColor += accent_ind * glow1;
        
        float dist2 = length(uv - vec2(0.15, 0.85));
        float glow2 = smoothstep(0.6, 0.0, dist2) * (1.0 - pulse) * 0.09;
        finalColor += accent_purp * glow2;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function compileShader(source: string, type: number): WebGLShader | null {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compiling fail:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking fail:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = window.innerHeight - e.clientY; // invert Y coordinate for WebGL
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId = 0;
    const render = (time: number) => {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);

      if (uTime) gl.uniform1f(uTime, time * 0.001);
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (gl && program) {
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteBuffer(positionBuffer);
      }
    };
  }, []);

  return (
    <canvas
      id="shader-canvas-ANIMATION_1"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
    />
  );
}
