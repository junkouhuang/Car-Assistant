var res 
$.getJSON("./js/city.json", function (data){
    res = data.data.groupAreas;
    console.log(data.data.groupAreas);
    traverseCity(data.data.groupAreas);
  }) 

  function traverseCity(data) {
    var cityStr = '';
    for(var key in data){
        cityStart = '<div class="letter-title">'+key+'</div><ul class="item-list">';
        var citySoon = '';
        for(var i = 0;i < data[key].length;i ++){
            var result = data[key][i];
            citySoon += '<li class="item border-bottom" title='+result.shortCode+'>'+result.name+'</li>'
        }
        citySoon += '</ul>';
        
        cityStr += (cityStart + citySoon);
    }
    $('.content').html(cityStr);
  }
  function traverseArea (name) {
    $('.citylist').html('');
    var oArea = '';
    for(var key in res){
        for(var i = 0;i < res[key].length;i ++){
            var result = res[key][i].city;
            if( result.name == name ){
                for(var k = 0;k < result.areaList.length;k ++){
                    oArea += '<li class="cityitem">${result.areaList[k].name}</li>';
                }
            }
        }
    }
    $('.citylist').html(oArea);
  }
