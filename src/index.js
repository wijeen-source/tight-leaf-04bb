// Worker: tight-leaf-04bb
// ตัวอย่างโค้ด Worker เบื้องต้น

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // ตัวอย่าง: ส่งคืน JSON response
    if (url.pathname === "/api/hello") {
      return Response.json({
        message: "Hello from tight-leaf-04bb!",
        timestamp: new Date().toISOString(),
      });
    }

    // สำหรับไฟล์ static อื่น ๆ Cloudflare จะจัดการผ่าน [assets] โดยอัตโนมัติ
    return new Response("Not Found", { status: 404 });
  },
};
