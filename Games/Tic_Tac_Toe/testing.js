const handleWinner=e=>{let r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],],y=!1,c=e=>{e.every((e=index)=>"y"===n[e])&&(e.forEach(e=>{console.log(n[e])}),y=!0,console.log(e))},n=["x","x","y","x","x","y","y","x","y"];return r.filter(r=>r.includes(e)).some((e=possibilities)=>e.every(r=>"y"===n[r]&&c(e))),y};console.log(handleWinner(8));
