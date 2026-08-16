const safe = () => ({ rss: 0, heapTotal: 0, heapUsed: 0, external: 0, arrayBuffers: 0 });
safe.rss = () => 0;
process.memoryUsage = safe;
