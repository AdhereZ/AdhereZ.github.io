(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{332:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"方法一-使用内置函数eval"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法一-使用内置函数eval"}},[s._v("#")]),s._v(" 方法一：使用内置函数"),t("code",[s._v("eval()")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("str_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{'name': 'nock', 'age': 14}\"")]),s._v("\n\ndict_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("eval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'str_info type is %s'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dict_info type is %s'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dict_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("输出如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("str_info type is <class 'str'>\ndict_info type is <class 'dict'>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),t("p",[t("code",[s._v("eval()")]),s._v("有安全性问题，示例如下")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python3")]),s._v("\nstr_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("input")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input str info: '")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndict_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("eval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dict_info is >%s< "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" dict_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("结果")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("input str info: __import__('os').system('ls')\ncollector_data.py\ntest.py\nDownload\ndict_info is >0<\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如上所示，当我们输入"),t("code",[s._v("__import__('os').system('ls')的时候会打印出脚本所存目录下的文件，如果传入一个``rm -rf *之类的命令，则会把所有该目录下的东西都删掉，所以存在安全性问题。")])]),s._v(" "),t("h2",{attrs:{id:"方法二-通过json模块处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法二-通过json模块处理"}},[s._v("#")]),s._v(" 方法二：通过json模块处理")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v("import json\nstr_info = '"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nock"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("'\ndict_info = json.loads(str_info)\nprint("),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string info type is --\x3e: %s"')]),s._v(" % (type(str_info)))\nprint("),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dict info type is --\x3e: %s"')]),s._v(" % (type(dict_info)))\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("输出如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("string info type is --\x3e: <class 'str'>\ndict info type is --\x3e: <class 'dict'>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"缺点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("json")]),s._v("模块进行转换也存在一个问题,由于"),t("code",[s._v("json")]),s._v("语法规定 数组或对象之中的字符串必须使用双引号，不能使用单引号,")]),s._v(" "),t("p",[t("strong",[s._v("错误示例")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\nstr_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{'name': 'nock', 'age': 18}\"")]),s._v("\ndict_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("报错信息")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/AdHeRe_418/image/raw/master/image/image-20220417214502292.png/",alt:"image-20220417214502292"}})]),s._v(" "),t("h2",{attrs:{id:"方法三-通过ast模块处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法三-通过ast模块处理"}},[s._v("#")]),s._v(" 方法三：通过ast模块处理")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ast\nstr_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"name": "nock", "age": 18}\'')]),s._v("\ndict_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("literal_eval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string info type is --\x3e: %s"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dict info type is --\x3e: %s"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dict_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ns_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"{'name': 'nock', 'age': 18}\"")]),s._v("\nd_info "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("literal_eval"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s info type is --\x3e: %s"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d info type is --\x3e: %s"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d_info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("输出如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("string info type is --\x3e: <class 'str'>\ndict info type is --\x3e: <class 'dict'>\ns info type is --\x3e: <class 'str'>\nd info type is --\x3e: <class 'dict'>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("使用"),t("code",[s._v("ast.literal_eval")]),s._v("进行转换既不存在使用"),t("code",[s._v("json")]),s._v(" 模块进行转换的问题，也不存在使用"),t("code",[s._v("eval")]),s._v("模块进行转换的安全性问题，因此推荐大家使用"),t("code",[s._v("ast.literal_eval")]),s._v("的方法。")])])}),[],!1,null,null,null);t.default=e.exports}}]);