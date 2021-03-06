/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,23],$V2=[1,24],$V3=[1,25],$V4=[1,26],$V5=[1,27],$V6=[1,28],$V7=[1,29],$V8=[1,30],$V9=[1,31],$Va=[1,15],$Vb=[1,16],$Vc=[1,17],$Vd=[1,18],$Ve=[1,19],$Vf=[34,35,36,37,38,39,40,41,42,53,54,55,56,57],$Vg=[11,45,46,47,48],$Vh=[9,11,22,25,27,29,30,45,46,47,48],$Vi=[9,11,22,25,27,29,30,34,35,36,37,38,39,40,41,42,45,46,47,48],$Vj=[9,11,22,25,27,29,30,33,34,35,36,37,38,39,40,41,42,45,46,47,48],$Vk=[6,9],$Vl=[34,35,36,37,38,39,40,41,42],$Vm=[34,35,36,37,38,39,40,41,42,49],$Vn=[1,94],$Vo=[1,86],$Vp=[1,95],$Vq=[1,84],$Vr=[1,83],$Vs=[1,87],$Vt=[1,75],$Vu=[1,76],$Vv=[1,77],$Vw=[1,78],$Vx=[1,79],$Vy=[1,80],$Vz=[1,81],$VA=[1,82],$VB=[1,85],$VC=[1,89],$VD=[1,90],$VE=[1,91],$VF=[1,92],$VG=[1,93],$VH=[8,9,10,24,26,28,29,30,33,34,35,36,37,38,39,40,41,42,49,53,54,55,56,57],$VI=[2,56],$VJ=[1,126],$VK=[1,123],$VL=[1,121],$VM=[1,124],$VN=[1,122],$VO=[1,129],$VP=[1,128],$VQ=[1,127],$VR=[1,125],$VS=[2,21],$VT=[1,136],$VU=[11,37],$VV=[9,11,33,34,35,36,37,41,42,61,64];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"graphConfig":4,"statements":5,"EOF":6,"spaceList":7,"GRAPH":8,"SPACE":9,"DIR":10,"SEMI":11,"statement":12,"verticeStatement":13,"styleStatement":14,"linkStyleStatement":15,"classDefStatement":16,"classStatement":17,"clickStatement":18,"vertex":19,"link":20,"alphaNum":21,"SQS":22,"text":23,"SQE":24,"PS":25,"PE":26,"DIAMOND_START":27,"DIAMOND_STOP":28,"TAGEND":29,"TAGSTART":30,"alphaNumStatement":31,"alphaNumToken":32,"MINUS":33,"ALPHA":34,"NUM":35,"COLON":36,"COMMA":37,"PLUS":38,"EQUALS":39,"MULT":40,"DOT":41,"BRKT":42,"linkStatement":43,"arrowText":44,"ARROW_POINT":45,"ARROW_CIRCLE":46,"ARROW_CROSS":47,"ARROW_OPEN":48,"PIPE":49,"textToken":50,"textStatement":51,"keywords":52,"STYLE":53,"LINKSTYLE":54,"CLASSDEF":55,"CLASS":56,"CLICK":57,"textNoTags":58,"textNoTagsToken":59,"stylesOpt":60,"HEX":61,"style":62,"styleComponent":63,"UNIT":64,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",8:"GRAPH",9:"SPACE",10:"DIR",11:"SEMI",22:"SQS",24:"SQE",25:"PS",26:"PE",27:"DIAMOND_START",28:"DIAMOND_STOP",29:"TAGEND",30:"TAGSTART",33:"MINUS",34:"ALPHA",35:"NUM",36:"COLON",37:"COMMA",38:"PLUS",39:"EQUALS",40:"MULT",41:"DOT",42:"BRKT",45:"ARROW_POINT",46:"ARROW_CIRCLE",47:"ARROW_CROSS",48:"ARROW_OPEN",49:"PIPE",53:"STYLE",54:"LINKSTYLE",55:"CLASSDEF",56:"CLASS",57:"CLICK",61:"HEX",64:"UNIT"},
productions_: [0,[3,3],[3,4],[4,4],[5,3],[5,1],[7,2],[7,1],[12,2],[12,2],[12,2],[12,2],[12,2],[12,2],[13,3],[13,1],[19,4],[19,6],[19,4],[19,4],[19,4],[19,4],[19,1],[21,1],[21,2],[31,1],[31,3],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[20,2],[20,1],[43,1],[43,1],[43,1],[43,1],[44,3],[23,1],[23,2],[51,1],[51,2],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[58,1],[58,2],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[59,1],[16,5],[17,5],[18,5],[14,5],[14,5],[15,5],[60,1],[60,3],[62,1],[62,2],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1],[63,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2:
this.$=$$[$0-3];
break;
case 3:
 yy.setDirection($$[$0-1]);this.$ = $$[$0-1];
break;
case 14:
 yy.addLink($$[$0-2],$$[$0],$$[$0-1]);this.$ = 'oy'
break;
case 15:
this.$ = 'yo';
break;
case 16:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'square');
break;
case 17:
this.$ = $$[$0-5];yy.addVertex($$[$0-5],$$[$0-2],'circle');
break;
case 18:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'round');
break;
case 19: case 21:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'diamond');
break;
case 20:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'odd');
break;
case 22:
this.$ = $$[$0];yy.addVertex($$[$0]);
break;
case 23: case 25: case 27: case 28: case 43: case 47: case 48: case 68: case 70: case 71: case 90:
this.$=$$[$0];
break;
case 24: case 44: case 69:
this.$=$$[$0-1]+''+$$[$0];
break;
case 26:
this.$=$$[$0-2]+'-'+$$[$0];
break;
case 29: case 30: case 31: case 32: case 33: case 34: case 37: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 58: case 59: case 60: case 72: case 73: case 74: case 75: case 76: case 77: case 79: case 80: case 81:
this.$ = $$[$0];
break;
case 35: case 57: case 78:
this.$ = '<br>';
break;
case 36:
$$[$0-1].text = $$[$0];this.$ = $$[$0-1];
break;
case 38:
this.$ = {"type":"arrow"};
break;
case 39:
this.$ = {"type":"arrow_circle"};
break;
case 40:
this.$ = {"type":"arrow_cross"};
break;
case 41:
this.$ = {"type":"arrow_open"};
break;
case 42:
this.$ = $$[$0-1];
break;
case 82:
this.$ = $$[$0-4];yy.addClass($$[$0-2],$$[$0]);
break;
case 83:
this.$ = $$[$0-4];yy.setClass($$[$0-2], $$[$0]);
break;
case 84:
this.$ = $$[$0-4];yy.setClickEvent($$[$0-2], $$[$0]);
break;
case 85:
this.$ = $$[$0-4];yy.addVertex($$[$0-2],undefined,undefined,$$[$0]);
break;
case 86: case 87:
this.$ = $$[$0-4];yy.updateLink($$[$0-2],$$[$0]);
break;
case 88:
this.$ = [$$[$0]]
break;
case 89:
$$[$0-2].push($$[$0]);this.$ = $$[$0-2];
break;
case 91:
this.$ = $$[$0-1] + $$[$0];
break;
case 92: case 93: case 94: case 95: case 96: case 97: case 98: case 99: case 100:
this.$=$$[$0]
break;
}
},
table: [{3:1,4:2,8:[1,3]},{1:[3]},{5:4,7:5,9:$V0,12:6,13:8,14:9,15:10,16:11,17:12,18:13,19:14,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve},{9:[1,32]},{6:[1,33]},{5:34,12:6,13:8,14:9,15:10,16:11,17:12,18:13,19:14,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve},{6:[2,5],7:35,9:$V0},o($Vf,[2,7],{7:36,9:$V0}),{11:[1,37]},{11:[1,38]},{11:[1,39]},{11:[1,40]},{11:[1,41]},{11:[1,42]},{11:[2,15],20:43,43:44,45:[1,45],46:[1,46],47:[1,47],48:[1,48]},{9:[1,49]},{9:[1,50]},{9:[1,51]},{9:[1,52]},{9:[1,53]},o($Vg,[2,22],{22:[1,54],25:[1,55],27:[1,56],29:[1,57],30:[1,58]}),o($Vh,[2,23],{31:21,32:22,21:59,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9}),o($Vi,[2,25],{33:[1,60]}),o($Vj,[2,27]),o($Vj,[2,28]),o($Vj,[2,29]),o($Vj,[2,30]),o($Vj,[2,31]),o($Vj,[2,32]),o($Vj,[2,33]),o($Vj,[2,34]),o($Vj,[2,35]),{10:[1,61]},{1:[2,1]},{6:[1,62]},{5:63,12:6,13:8,14:9,15:10,16:11,17:12,18:13,19:14,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve},o($Vf,[2,6]),o($Vk,[2,8]),o($Vk,[2,9]),o($Vk,[2,10]),o($Vk,[2,11]),o($Vk,[2,12]),o($Vk,[2,13]),{19:64,21:20,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},o($Vl,[2,37],{44:65,49:[1,66]}),o($Vm,[2,38]),o($Vm,[2,39]),o($Vm,[2,40]),o($Vm,[2,41]),{21:67,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9,61:[1,68]},{35:[1,69]},{21:70,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{21:71,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{21:72,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{8:$Vn,9:$Vo,10:$Vp,23:73,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,23:97,25:[1,96],29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,23:98,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,23:99,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,23:100,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},o($Vh,[2,24]),{32:101,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{11:[1,102]},{1:[2,2]},{6:[2,4]},{11:[2,14]},o($Vl,[2,36]),{8:$Vn,9:$Vo,10:$Vp,23:103,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{9:[1,104]},{9:[1,105]},{9:[1,106]},{9:[1,107]},{9:[1,108]},{9:[1,109]},{8:$Vn,9:$Vo,10:$Vp,24:[1,110],29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},o($VH,[2,43]),o($VH,[2,47]),o($VH,[2,48]),o($VH,[2,49]),o($VH,[2,50]),o($VH,[2,51]),o($VH,[2,52]),o($VH,[2,53]),o($VH,[2,54]),o($VH,[2,55]),o($VH,$VI),o($VH,[2,57]),o($VH,[2,58]),o($VH,[2,59]),o($VH,[2,60]),o($VH,[2,61]),o($VH,[2,62]),o($VH,[2,63]),o($VH,[2,64]),o($VH,[2,65]),o($VH,[2,66]),o($VH,[2,67]),{8:$Vn,9:$Vo,10:$Vp,23:112,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:74,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,26:[1,113],29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,28:[1,114],29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,24:[1,115],29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{8:$Vn,9:$Vo,10:$Vp,29:[1,116],30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},o($Vi,[2,26]),o([9,34,35,36,37,38,39,40,41,42,53,54,55,56,57],[2,3]),{8:$Vn,9:$Vo,10:$Vp,29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,49:[1,117],50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},{9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,60:118,61:$VQ,62:119,63:120,64:$VR},{9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,60:130,61:$VQ,62:119,63:120,64:$VR},{9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,60:131,61:$VQ,62:119,63:120,64:$VR},{9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,60:132,61:$VQ,62:119,63:120,64:$VR},{21:133,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},{21:134,31:21,32:22,34:$V1,35:$V2,36:$V3,37:$V4,38:$V5,39:$V6,40:$V7,41:$V8,42:$V9},o($Vg,[2,16]),o($VH,[2,44]),{8:$Vn,9:$Vo,10:$Vp,26:[1,135],29:$Vq,30:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz,41:$VA,42:$VB,50:111,52:88,53:$VC,54:$VD,55:$VE,56:$VF,57:$VG},o($Vg,[2,18]),o($Vg,[2,19]),o($Vg,[2,20]),o([8,9,10,29,30,33,34,35,36,37,38,39,40,41,42,53,54,55,56,57],$VI,{11:$VS,45:$VS,46:$VS,47:$VS,48:$VS}),o($Vl,[2,42]),{11:[2,85],37:$VT},o($VU,[2,88],{63:137,9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,61:$VQ,64:$VR}),o($VV,[2,90]),o($VV,[2,92]),o($VV,[2,93]),o($VV,[2,94]),o($VV,[2,95]),o($VV,[2,96]),o($VV,[2,97]),o($VV,[2,98]),o($VV,[2,99]),o($VV,[2,100]),{11:[2,86],37:$VT},{11:[2,87],37:$VT},{11:[2,82],37:$VT},{11:[2,83]},{11:[2,84]},{26:[1,138]},{9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,61:$VQ,62:139,63:120,64:$VR},o($VV,[2,91]),o($Vg,[2,17]),o($VU,[2,89],{63:137,9:$VJ,33:$VK,34:$VL,35:$VM,36:$VN,41:$VO,42:$VP,61:$VQ,64:$VR})],
defaultActions: {33:[2,1],62:[2,2],63:[2,4],64:[2,14],133:[2,83],134:[2,84]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 53;
break;
case 1:return 54;
break;
case 2:return 55;
break;
case 3:return 56;
break;
case 4:return 57;
break;
case 5:return 8;
break;
case 6:return 10;
break;
case 7:return 10;
break;
case 8:return 10;
break;
case 9:return 10;
break;
case 10:return 10;
break;
case 11:return 10;
break;
case 12:return 35;
break;
case 13:return 42;
break;
case 14:return 36;
break;
case 15:return 11;
break;
case 16:return 37;
break;
case 17:return 39;
break;
case 18:return 40;
break;
case 19:return 41;
break;
case 20:return 30;
break;
case 21:return 29;
break;
case 22:return 47;
break;
case 23:return 45;
break;
case 24:return 46;
break;
case 25:return 48;
break;
case 26:return 33;
break;
case 27:return 38;
break;
case 28:return 39;
break;
case 29:return 34;
break;
case 30:return 49;
break;
case 31:return 25;
break;
case 32:return 26;
break;
case 33:return 22;
break;
case 34:return 24;
break;
case 35:return 27
break;
case 36:return 28
break;
case 37:return 'QUOTE';
break;
case 38:return 9;
break;
case 39:return 'NEWLINE';
break;
case 40:return 6;
break;
}
},
rules: [/^(?:style\b)/,/^(?:linkStyle\b)/,/^(?:classDef\b)/,/^(?:class\b)/,/^(?:click\b)/,/^(?:graph\b)/,/^(?:LR\b)/,/^(?:RL\b)/,/^(?:TB\b)/,/^(?:BT\b)/,/^(?:TD\b)/,/^(?:BR\b)/,/^(?:[0-9])/,/^(?:#)/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:=)/,/^(?:\*)/,/^(?:\.)/,/^(?:<)/,/^(?:>)/,/^(?:--[x])/,/^(?:-->)/,/^(?:--[o])/,/^(?:---)/,/^(?:-)/,/^(?:\+)/,/^(?:=)/,/^(?:[\u0021-\u0027\u002A-\u002E\u003F\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC_])/,/^(?:\|)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:")/,/^(?:\s)/,/^(?:\n)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}