
from flask import Flask, request, abort

from view.parser import parse_xls

import json

app = Flask(__name__)


@app.route('/parseXls', methods=['GET', 'POST'])
def parseXls():
    if request.json is None or ("file" not in request.json and "path" not in request.json):
        abort(400)
    file = request.json.get("file")
    if file:
        result = parse_xls(request.json["file"])
    else:
        result = parse_xls(path=request.json.get("path"))
    return json.dumps({"result": "ok", "code": 200, "timetable": result})


def run_app():
    app.run(host="0.0.0.0", port=4000, debug=False)
