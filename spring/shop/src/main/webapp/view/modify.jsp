<%--
  User: kmsms
  Date: 2024-11-25
  Time: 오후 3:25
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add Cust</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<form action="${pageContext.request.contextPath}/custs/add2" method="post"
      class="border-2 w-1/2 h-1/3 mt-5 flex flex-col justify-center gap-2 items-center mx-auto">
    <div class="flex justify-between gap-3 w-1/2">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" class="border-2">
    </div>
    <div class="flex justify-between gap-3 w-1/2">
        <label for="tel">Tel</label>
        <input type="tel" id="tel" name="tel" class="border-2">
    </div>
    <div class="flex justify-between gap-3 w-1/2">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class="border-2">
    </div>

    <button type="submit" class="border-2 w-1/2">Add</button>

</form>
</body>
</html>
