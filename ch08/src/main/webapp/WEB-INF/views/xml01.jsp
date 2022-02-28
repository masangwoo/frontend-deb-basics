<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"
   src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script>
$(function() {
   $("button").click(function() {
      $.ajax({
         url:"${pageContext.request.contextPath}/api/xml", 
         async:true, 
         type:'get',
         dataType:'xml',
         success: function(xml) {
            var $data = $("data",xml);
            var $no = $("no",xml);
            var $name = $("name",xml);
            var $message = $("message",xml);

        	var html = "";
			html += ("<h1>" + $no.text() + "</h1>");
			html += ("<h2>" + $name.text() + "</h2>");
			html += ("<h3>" + $message.text() + "</h3>");
			
			$("#data").append(html);


         }
      });
   });
});
</script>
</head>
<body>
   <h1>AJAX Test: xml Format Data</h1>

   <button>데이터가져오기</button>
   <div id="data"></div>


</body>
</html>