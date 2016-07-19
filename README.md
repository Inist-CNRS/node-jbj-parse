# JBJ parse module

Parse module of JBJ: file format conversion, through parsing (csv, parseCSV, parseCSVFile, json, parseJSON, xml, parseXML)

## Contributors

  * [Nicolas Thouvenin](https://github.com/touv)

## Installation

```bash
$ npm install jbj-parse
```

## Usage

This JBJ module cannot be used alone. JBJ has to be installed.

```js
var JBJ = require('jbj');
JBJ.use(require('jbj-parse'));
```

## Tests

Use [mocha](https://github.com/visionmedia/mocha) to run the tests.

```bash
$ npm install
$ npm test
```

## Actions

Once the module is declared as used for JBJ, you can use the following actions:

<a id="csv"></a>
### csv: separator
Pack *input* to CSV, return string
```javascript
    var stylesheet = {
        "set" : ["x","y","z"],
        "csv" : ","
    };
    // output : "x,y,z\r\n"
```

<a id="parsecsv"></a>
### parseCSV: separator

*aliases : parseCSVField, fromCSV, uncsv*

Parse *input* as CSV string, return array
```javascript
    var stylesheet = {
        "set" : "x,y,z",
        "parseCSV": ",",
    };
    // output : ["x","y","z"]
```

<a id="parsecsvfile"></a>
### parseCSVFile: separator

*alias : fromCSVFile*

Parse *input* as CSV string, return an array of arrays of columns content.

```javascript
    var stylesheet = {
        "set" : "\"Afghanistan\";\"AFG\"\n\"Aland Islands\";\"ALA\"",
        "parseCSVFile": ";",
    };
    // output : [ [ 'Afghanistan', 'AFG' ], [ 'Aland Islands', 'ALA' ] ]
```

<a id="json"></a>
### json: none

*alias : toJSON*

Pack *input* to JSON, return string
```javascript
    var stylesheet = {
        "set" : ["x","y","z"],
        "json": true
    };
    // output : "[\"x\",\"y\",\"z\"]"
```

> **Warning**: when parsing a whole CSV file, be aware that file line columns can't have space in their names, neither special characters (they must fit in variable names)

<a id="parsejson"></a>
### parseJSON:

*aliases : fromJSON, unjson*

Parse *input* as JSON string, return object
```javascript
    var stylesheet = {
        "set" : "[\"x\",\"y\",\"z\"]",
        "parseJSON": true
    };
    // output : ["x","y","z"]
```

<a id="xml"></a>
### xml: options

Pack *input* to XML, return string

*options* are detailed in the [xml-mapping](https://github.com/touv/node-xml-mapping#options-1) documentation
```javascript
    var stylesheet = {
        "set": {
            "root" : {
                "item" : [
                    { "index" : "1", "$t" : "A"},
                    { "index" : "2", "$t" : "B"},
                    { "index" : "3", "$t" : "C"}
                ]
            }
        },
        "xml" : {
            "indent": false
        }
    };
    // output : <root><item index="1">A</item><item index="2">B</item><item index="3">C</item></root>
```

<a id="parsexml"></a>
### parseXML: options

*aliases : fromXML, unxml*

Parse *input* as XML string, return object

*options* are detailed in the [xml-mapping](https://github.com/touv/node-xml-mapping#options) documentation
```javascript
    var stylesheet = {
        "set": "<root><item xml:id=\"1\">A</item><item xml:id=\"2\">B</item><item xml:id=\"3\">C</item></root>",
        "parseXML" : {
            "specialChar": "#",
            "longTag" : true
        }
    };
    // output : { root : { item : [ { xml#id: 1, #text: A }, { xml#id: 2, #text: B }, { xml#id: 3, #text: C } ] } }
```

<a id="url"></a>
### url: options

Pack *input* to URL, return string

```javascript
    var stylesheet = {
        "set":  {
		  "protocol": "http:",
		  "auth": "user:pass",
		  "port": "8080",
		  "hostname": "host.com",
		  "hash": "#hash",
		  "query": { query: 'string' },
		  "pathname": "/p/a/t/h",
        },
        "url" : true
    };
    // output : http://user:pass@host.com:8080/p/a/t/h?query=string#hash
```

<a id="parseurl"></a>
### parseURL: options

*aliases : fromURL, unurl*

Parse *input* as URL string, return object

```javascript
    var stylesheet = {
        "set": "http://user:pass@host.com:8080/p/a/t/h?query=string#hash",
        "parseURL" : true
    };
    // output : { protocol: 'http:', slashes: true, auth: 'user:pass', host: 'host.com:8080', port: '8080', hostname: 'host.com', hash: '#hash', search: '?query=string', query: { query: 'string' }, pathname: '/p/a/t/h', path: '/p/a/t/h?query=string', href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
```

<a id="querystring"></a>
### querystring: options

Pack *input* to queryString, return string

```javascript
    var stylesheet = {
        "set":  {
		  "a": "http:",
		  "b": "user:pass",
		  "c": "8080",
		  "d": "host.com",
		  "e": "#hash",
		  "f": { "f1": 'string' },
		  "g": "/p/a/t/h",
        },
        "querystring" : true
    };
    // output : a=http%3A&b=user%3Apass&c=8080&d=host.com&e=%23hash&f%5Bf1%5D=string&g=%2Fp%2Fa%2Ft%2Fh
```

<a id="parsequerystring"></a>
### parseQueryString: options

*aliases : fromQueryString*

Parse *input* as QueryString string, return object

```javascript
    var stylesheet = {
        "set": "a=http%3A&b=user%3Apass&c=8080&d=host.com&e=%23hash&f%5Bf1%5D=string&g=%2Fp%2Fa%2Ft%2Fh",
        "parseQueryString" : true
    };
    // output : { a: 'http:', b: 'user:pass', c: '8080', d: 'host.com', e: '#hash', f: { f1: 'string' }, g: '/p/a/t/h' }

```




## Examples

See unit tests : https://github.com/Inist-CNRS/node-jbj-parse/tree/master/test


## Try it

http://Inist-CNRS.github.io/node-jbj/


## License

[MIT](https://github.com/Inist-CNRS/node-jbj-parse/blob/master/LICENSE)
