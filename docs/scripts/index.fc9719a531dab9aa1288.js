!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}({0:function(e,t){e.exports='<!DOCTYPE html> <html lang=en> <head> <meta charset=UTF-8> <meta http-equiv=X-UA-Compatible content="ie=edge"> <title><%= htmlWebpackPlugin.options.title %></title> </head> <body> <div id=app class=loading> </div> </body> </html> '},1:function(e,t,n){"use strict";n(9),n(0),function(){!function(e,t){var n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");n.open("GET",e),n.onreadystatechange=function(){n.readyState>3&&200==n.status&&function(e,t){if(e.classList)e.classList.remove(t);else if(hasClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}(document.getElementById("app"),"loading"),t(n.responseText)},n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send()}("https://cors-anywhere.herokuapp.com/http://api.publicinput.com:8099/Api/HighlightedComments?key=ser31d0ood0jne967olxy0wwyqng9chf&set=test",function(e){document.getElementById("app").innerHTML='\n                      <div class="container-fluid">\n                        <div class="row">\n                          <div class="col-md-4">\n                            <div class="app-topic">\n                              <div class="app-topic--header">\n                                <h2 class="app-topic--title">The Project Title</h2>\n                                <div><a href="" role="button" class="btn btn-join"><b>Join The Conversation</b></a></div>\n                              </div>\n                              <div class="app-topic--body scrollable-y">\n                                <h3><i>The question goes here...</i></h3>\n                                '.concat(function(e){for(var t=JSON.parse(e),n="",o=0;o<t.length;o++){var i=t[o].comment;n+='<li><p class="m-0">'.concat(i,"</p></li>")}return'<ul class="app-topic--comments">'+n+"</ul>"}(e),"\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>")})}()},9:function(e,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidXJsIiwic3VjY2VzcyIsInhociIsIndpbmRvdyIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiZWwiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoYXNDbGFzcyIsInJlZyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJyZW1vdmVDbGFzcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNwb25zZVRleHQiLCJzZXRSZXF1ZXN0SGVhZGVyIiwic2VuZCIsImdldEFqYXgiLCJkYXRhIiwiaW5uZXJIVE1MIiwiY29uY2F0IiwiX2RhdGEiLCJKU09OIiwicGFyc2UiLCJjb21tZW50cyIsImoiLCJsZW5ndGgiLCJjb21tZW50IiwiZ2VuZXJhdGVDb21tZW50cyJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFB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dCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCFET0NUWVBFIGh0bWw+IDxodG1sIGxhbmc9ZW4+IDxoZWFkPiA8bWV0YSBjaGFyc2V0PVVURi04PiA8bWV0YSBodHRwLWVxdWl2PVgtVUEtQ29tcGF0aWJsZSBjb250ZW50PVxcXCJpZT1lZGdlXFxcIj4gPHRpdGxlPjwlPSBodG1sV2VicGFja1BsdWdpbi5vcHRpb25zLnRpdGxlICU+PC90aXRsZT4gPC9oZWFkPiA8Ym9keT4gPGRpdiBpZD1hcHAgY2xhc3M9bG9hZGluZz4gPC9kaXY+IDwvYm9keT4gPC9odG1sPiBcIjsiLCJpbXBvcnQgJ2luZGV4LnNjc3MnO1xuaW1wb3J0ICdodG1sLWxvYWRlciEuL2luZGV4Lmh0bWwnO1xuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgdXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHA6Ly9hcGkucHVibGljaW5wdXQuY29tOjgwOTkvQXBpL0hpZ2hsaWdodGVkQ29tbWVudHM/a2V5PXNlcjMxZDBvb2Qwam5lOTY3b2x4eTB3d3lxbmc5Y2hmJnNldD10ZXN0JztcblxuICBnZXRBamF4KHVybCwgZ2VuZXJhdGVIVE1MKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNvbW1lbnRzKGRhdGEpIHtcbiAgICB2YXIgX2RhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIHZhciBjb21tZW50cyA9ICcnO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBjb21tZW50ID0gX2RhdGFbal0uY29tbWVudDtcbiAgICAgIGNvbW1lbnRzICs9IGA8bGk+PHAgY2xhc3M9XCJtLTBcIj4ke2NvbW1lbnR9PC9wPjwvbGk+YDtcbiAgICB9XG4gICAgcmV0dXJuICc8dWwgY2xhc3M9XCJhcHAtdG9waWMtLWNvbW1lbnRzXCI+JyArIGNvbW1lbnRzICsgJzwvdWw+JztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRNTChkYXRhKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtdG9waWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtdG9waWMtLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJhcHAtdG9waWMtLXRpdGxlXCI+VGhlIFByb2plY3QgVGl0bGU8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJcIiByb2xlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWpvaW5cIj48Yj5Kb2luIFRoZSBDb252ZXJzYXRpb248L2I+PC9hPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLXRvcGljLS1ib2R5IHNjcm9sbGFibGUteVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGk+VGhlIHF1ZXN0aW9uIGdvZXMgaGVyZS4uLjwvaT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2dlbmVyYXRlQ29tbWVudHMoZGF0YSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWpheCh1cmwsIHN1Y2Nlc3MpIHtcbiAgICB2YXIgeGhyID0gd2luZG93LlhNTEh0dHBSZXF1ZXN0ID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMyAmJiB4aHIuc3RhdHVzID09IDIwMClcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLCAnbG9hZGluZycpO1xuICAgICAgICBzdWNjZXNzKHhoci5yZXNwb25zZVRleHQpO1xuICAgIH07XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICB4aHIuc2VuZCgpO1xuICAgIHJldHVybiB4aHI7XG4gIH1cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICBlbHNlIGlmIChoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJylcbiAgICAgIGVsLmNsYXNzTmFtZT1lbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJylcbiAgICB9XG4gIH1cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9