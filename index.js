const {parse} = require(`url`)
const http = require(`http`);

let state = {
    status: 200,
    value: `a,b
1,2
`,
};

const app = http.createServer((req, res) => {
    const {pathname, query} = parse(req.url, true);
    if (pathname === `/`) {
        res.writeHead(state.status);
        res.end(state.value);
    } else if (pathname === `/setup`) {
        res.writeHead(200);
        state = query;
    } else {
        res.writeHead(404);
    }
    res.end();
});

app.listen(2599);
