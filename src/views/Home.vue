<template>
  <div style="background-color: #95a5a6;">
    <div class="navbar">
      <ul style="list-style: none;">
      <li class="logo">
        <img src="../assets/images/mainLogo.png" alt="MainLogo" width="80" height="80
        "><p class="listTexts">Монгол хэлний шалгалтын систем</p>
      </li>
      <li @click="FAQbtn()" class="listTexts">FAQ</li>
      <li @click="getExam()" class="listTexts">Шалгалт өгөх</li>
      <li @click="SeePoint()" class="listTexts">Оноо харах</li>
      <li @click="LogOut()" class="listTexts">Log out</li>
      </ul>
    </div>
    <div class="main">
      <div @click="getExam()" class="card">
        <ul style="list-style: none;">
          <li><img src="../assets/images/examLogo.png" alt="ExamLogo" width="200px" height= "200px" style="padding: 1rem 0 1rem 0;"></li>
          <li>
             <h1>ШАЛГАЛТ ӨГӨХ</h1>
             <p>Энэхүү шалгалтын зорилго бол монгол хэлний тодорхой мэдлэг болон чадварыг тодорхой даалгаварын тусламжтайгаар дүгнэх зорилготой ба тухайн
               шалгатын оноо бол албан ёсны бус ба зөвхөн өөрийгөө дүгнэлт хийж турших зорилготой хүмүүс хэрэглэнэ</p>
          </li>
        </ul>
      </div>
        <div @click="SeePoint()" class="card">
        <ul style="list-style: none;">
          <li><img src="../assets/images/point.png" alt="ExamLogo" width="200px" height= "200px" style="padding: 1rem 0 1rem 0;"></li>
          <li>
             <h1>ОНОО ШАЛГАХ</h1>
             <p>Энэхүү шалгалтын оноо бол тухайн шалгалтын системээр өгөгдсөн шалтгалтын оноог харах ба тухайн
               шалгатын оноо нь албан ёсны бус ба зөвхөн өөрийгөө дүгнэлт хийж турших зорилготой хүмүүс хэрэглэнэ</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <h1>Ariyaninj &copy; 2022</h1>
       <p>
         МОНГОЛ ХЭЛНИЙ ОНЛАЙН ШАЛГАЛТЫН СИСТЕМ : БАКАЛАВРЫН СУДАЛГААНЫ АЖИЛ
         
       </p>
    </div>
    </div>
</template>

<script>
export default {
  methods:{
    FAQbtn(){

    },
        getExam(){
        this.$router.push('/exam1');
    },
     SeePoint(){

    },
     LogOut(){

    },
  }
}
</script>

<style scoped>

.navbar{
  background-color: #ecf0f1;
}
.navbar ul{
  margin-right: 5%;
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
}
.logo{
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  width: 21%;
}
.listTexts{
margin-top: 1.5rem;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 1.25rem;
font-weight: 800;
}
.listTexts:hover{
  color: #00b894;
  cursor: pointer;
  font-size: 1.5rem;
}
.logo p{
  padding-left: 1rem;
  margin-top: 0.5rem;
}
.logo p:hover{
color: black;
font-size: 1.25rem;
}
.main{
  height: 80vh;
}
.card{
  margin: 6rem 25rem 0 25rem;
  border: 1px solid black;
  border-radius: 20px ;
  background: #ecf0f1;
}
.card:hover{
  margin: 6rem 24rem 0 24rem;
  border: 5px solid #ecf0f1;
  color: #ecf0f1;
  border-radius: 20px ;
  background: #00b894;
 box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}
.card ul{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card ul h1{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 800;
   margin: 1rem 8rem 1rem 5rem
}
.card ul p{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  margin: 1rem 2rem 1rem 2rem
}
.footer{
  padding-left: 3rem;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
}
.footer p{
  padding-top: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  padding-right: 1rem;
}
</style>