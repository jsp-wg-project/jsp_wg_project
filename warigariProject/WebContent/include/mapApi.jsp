<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resource/css/mapApi.css">
    <script defer src="${pageContext.request.contextPath}/resource/js/mapApi.js"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f49922a8774592c118e15c56666d5011&libraries=services"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
</head>
<body>
    <!-- 카카오맵 api -->
    <div class="option">
        <div class="main-section4-map-keyword">
            <form class="main-section4-map-keyword-form" onsubmit="searchPlaces(); return false;">
                <input type="text" value="노원" 
                id="keyword" class="main-section4-map-keyword-input" 
                size="15" placeholder="지역명을 입력해 주세요 ex) 노원"> 
                <div class="main-section4-map-keyword-text">테니스장</div>
                <button class="main-section4-map-keyword-button" type="submit">검색하기</button> 
            </form>
        </div>
    </div>
    <div class="map_wrap">
        <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
        <div id="menu_wrap" class="bg_white">
            <hr>
            <ul id="placesList"></ul>
            <div id="pagination"></div>
        </div>
    </div>
    
</body>
</html>
