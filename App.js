import React from "react";
import {SafeAreaView,StatusBar} from "react-native";
import styled from "styled-components";
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function App(){

  const recipes = [
    {
      name:"Queso ",
      info: "300gr | 2 reservas",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPZTKhprX9WgNY-wX_gME1bkyXzHmvwjvZ3w&usqp=CAU"
    },
    {
      name:"Maiz Molido",
      info: "120gr | 2 reservas",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvyhK365-RgcA7V8pnKKerbtDppJ-VdykZCXiyNqScEdlgFBJwo1B8-JwZD4QR5JUAuOT_cPW53xDp_J08ZhmuW7CqR0p6s8PCZjewqHeDvUrMQjPGR_TnV1Nzq-mcXOPxbFuoFvxdMumZ1jbo_Hh76p9p31vggZN9EEmyq-lgIJjFqLmIEVMWn94632GAT4pRDi7GvzSkJCvxM23E1ams2AQI0Mn9v2THWj5WmITG7sVS-zspn0caVWrQFZS9Wl-vz20KOQgQ5jfHA4q_PoCk8HSblQnJsIXbyU3nlOxaaVZkspZFy9umDt1oJc_YZ7Qaz9gmIDr5j3v_PjylwPTZ1u9ST228h4N_kRIGVyHLGRYnWFHn4N-4I_sQqrKAg-X_6IxCtm_qUXlJo1uenIhSDxfNADZIX8kTm7rgH0lPrRu29t7KRgJmdHI&usqp=CAU"
    },
    {
      name:"Lorem Ipsum is simply ",
      info: "45min | 2 reservas",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdxkbvMfUSaTBfwRyfFWiAGR-UTgpyrnEUPCowzbBmPTE0QdvSITgK-xek-PwAFgaGkEFpsnRRMOgfbh0CffI9c6-m8w3PtRQz1DZ6YivGid6hL8RW_clCmbnXqeCYmvBoL-qGSTihJ3SIhca8d2H44o5I7IiI_SqvoNknR5Bgbl9DX9Wh4lLx_EEfr-Jq0_JuuNq5SozzvzZyMKnHAOIFgSmf9M07UK3gMwBW_npmxfcUmitMHRCk7_MZbhY1fL5Kw1XNL8vSqPBflRYx6F8ZOAZGAffhS9hTQ3BGxDmBBZuMuzBsKEVS-o54Jo2dbGkY5_XM1shoqTcfTGHmnzXe6PunRZssXU0rvSWX-_GhgujUnxUIMhIivRiA7HFpx8BMuhjRXoh-BgDkl8PS7hF_qemTWsHmwtVEO6ikMGcR0k_A34a92owVLmk&usqp=CAU"
    },
  ]



  return (
    <Container>
      <StatusBar barStyle="light-content"/>
      <RecipeBackground source={{uri:"https://images.unsplash.com/photo-1573519939879-57c40b9cea5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"}}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#FFF"/>
              <Text style={{marginLeft:10}}>Ingredientes</Text>
            </Back>
            <AntDesign name="heart" size={24} color="#fff"/>
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Chipa 
            </Text>
            <Divider/>
            <Text bold>80 calorias per 100g</Text>
            <Text>3g fat | 10g protein | 8g carbs</Text>
          </MainRecipe>
          <Button>
            <Text bold small>MAS INFO</Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>
      <RecipesContainer>
        <Text dark heavy large> 
          Ingredientes
        </Text>
        <Text dark small> 
          Descripciom de ingredientes
        </Text>
        <Recipes>
          {recipes.map((recipe,index)=>{
            return(
              <Recipe key={index}>
                <RecipeImage source={{uri : recipe.image}}/>
                <RecipeInfo>
                  <Text dark bold>
                    {recipe.name}
                  </Text>
                  <Text dark small>
                    {recipe.info}
                  </Text>
                </RecipeInfo>
                <AntDesign name="hearto" size={18} color="#000"/>
              </Recipe>
            )
          })}
        </Recipes>
      </RecipesContainer>
    </Container>
  )
}

const Container = styled.View`
  flex:1;
  background-color:#fff;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  font-family : "AvenirNext-Regular";
  ${({title,large,small}) =>{
    switch(true){
      case title:
        return `font-size:32px`;
      case large:
        return `font-size:20px`;
      case small:
          return `font-size:13px`;
    }
  }}

  ${({bold,heavy})=> {
    switch(true){
      case bold :
        return `font-weight:600`;
      case heavy :
        return `font-weight:700`;
    }
  }}
`

const RecipeBackground = styled.ImageBackground`
  width:100%;
`;

const MenuBar = styled.View`
  flex-direction:row;
  justify-content:space-between;
  padding:16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items : center;
`

const MainRecipe = styled.View`
  padding:0 32px;
  margin:80px 0 32px 0;
`

const Divider = styled.View`
  border-bottom-color:#fff;
  border-bottom-width:2px;
  width:150px;
  margin:8px 0;
`
const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255,255,255,0.3);
  align-self : flex-start;
  padding:6px 18px;
  border-radius:100px;
`

const RecipesContainer = styled.View`
  margin-top:-24px;
  padding:32px;
  background-color:#fff;
  border-top-left-radius:24px;
  border-top-right-radius:24px;
`

const Recipes = styled.View`
  margin-top:16px;
`

const Recipe = styled.View`
  flex-direction: row;
  align-items:center;
  margin-bottom:16px;
`


const RecipeImage = styled.Image`
  width:60px;
  height:60px;
  border-radius:8px;
`

const RecipeInfo = styled.View`
  flex:1;
  margin-left:12px;
`