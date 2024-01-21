// pages/api/get-ip.js
export default function handler(req: { method: string; headers: { [x: string]: any; }; connection: { remoteAddress: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { ip: any; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
      // 获取客户端 IP 地址的方法依赖于部署环境
      // 在 Vercel 上，你可以使用 `req.headers['x-forwarded-for']`
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      res.status(200).json({ ip });
    } else {
      // 如果不是 POST 请求，返回 405 方法不允许
      res.status(405).end();
    }
  }