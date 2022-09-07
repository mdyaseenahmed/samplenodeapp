var server = require('./index.js');
var request = require('request')

describe('server test', function() {
    test("get response", () => {
        request.get("http://localhost:5000", function(err, res, body) {
            expect(res.statusCode).toBe(200)
            expect(body).toBe("Hello, User.!")
            server.close();
        })
    })
})