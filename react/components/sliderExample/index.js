import React from 'react';
import SliderLayout from "vtex.slider-layout/SliderLayout";

const sliderExample = () =>{

    return (
        <>
            <h3>Slider Ejemplo</h3> 
            <SliderLayout
                itemsPerPage={{
                    desktop: 1,
                    tablet: 1,
                    phone: 1
                }}
                infinite={true}
                fullWidth={true}
                showPaginationDots={"always"}
                showNavigationArrows={"desktopOnly"}
                blockClass={"slider-ejemplo"}
            >

                <img src="https://storecomponents.vteximg.com.br/arquivos/banner-principal.png"></img>
                <p>qqq</p>
                <img src="https://storecomponents.vteximg.com.br/arquivos/banner-principal.png"></img>
                <img src="https://storecomponents.vteximg.com.br/arquivos/banner-principal.png"></img>
                <img src="https://storecomponents.vteximg.com.br/arquivos/banner-principal.png"></img>
            </SliderLayout>
        </>
    )
    
}

export default sliderExample;