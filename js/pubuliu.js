
            function Pagination(){

            }
            Pagination.prototype.init=function(){
                this.wrap=document.querySelector("#wrap1 ul");
                this.clientHeight=document.documentElement.clientHeight;
                this.loading=false;
                this.now_page=0;
                this.loadJson()
                .then(function(json){
                    this.data=json;
                    this.total=Math.ceil(json.count/4);
                    this.renderPage();
                }.bind(this));
                this.handleEvent();
            }
            Pagination.prototype.loadJson=function(){
                return new Promise(function(success,error){
                    var xhr=new XMLHttpRequest();
                    xhr.open("GET","php/data.json");
                    xhr.send(null);
                    xhr.onload=function(){
                        if(xhr.status==200){
                            var json=typeof xhr.response=="string"?JSON.parse(xhr.response):xhr.response;
                            success(json)

                        }else{
                            error("请求出错")
                        }    
                    }
                })
            }
            Pagination.prototype.renderPage=function(){
                //渲染页面
                var list=this.data.subjects;
                var html="";
                 // 起始点和终止点;
                // 第几页   	范围 	for循环起始点	for循环终止点
                // 0	        0~3	            0	        3
                // 1	        4~7	            4	        7
                // 2	        8~11	        8	        11
                // 3	        12~15	        12	        15
                // 4	        16~19	        16	        19
                // 5	        20~23	        20	        23
                // 6	        24~27	        24	        27
                // n	                     4 * n       	4 * n  + 3
                for(var i=4*this.now_page;i<=4*this.now_page+3;i++){
                    html+=` 
                            <li>
                                <img src="${list[i].images.small}" alt="">
                                <p><a href="#">${list[i].title}</a></p>
                                <p>${getName(list[i].casts)} ${getName(list[i].directors)}</p>
                                <p>${list[i].year}</p>
                                <p>${list[i].rating.average}</p>
                                <div class="shop">
                                    <a href="#">加入购物车</a>
                                </div>
                            </li>`
                }
                this.wrap.innerHTML+=html;
                this.loading=false;
            }
            Pagination.prototype.handleEvent=function(){
                onscroll=this.load.bind(this)
            }
            Pagination.prototype.load=function(){
                if(this.loading){
                    return 0;
                }
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                var showHeight = scrollTop + this.clientHeight;
                var eleChildren = this.wrap.getElementsByTagName("li");
                var lastChildren = eleChildren[eleChildren.length - 1];
                var lastTop = lastChildren.offsetTop;
                if(lastTop <= showHeight){
                // 加载数据;
                // 加载过程之中 不重复加载;
                // console.log("加载数据");
                this.loading = true;
                this.now_page ++;  

                if(this.now_page > this.total){
                    return 0;
                }

                this.renderPage();
                // document.documentElement.scrollTop = 0;
                // console.log(1);
            }


            }
            var pagination=new Pagination();
            pagination.init()
