import React, { Component } from "react";
import CHeader from "./Component/CHeader";
import CSlider from "./Component/CSlider";
import CFooter from "./Component/CFooter";
import CWelcome from "./Component/CWelcome";
import CPopular from "./Component/CPopular";
import CClothing from "./Component/CClothing";
import CDeals from "./Component/CDeals";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";




class Main extends Component {
    render() {
        return (
            <div>
                <div className="header">
                <a id="button">
                <CHeader></CHeader></a>
                {/* <script>
                var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
</script> */}


                </div>
                <div className="slider"><CSlider></CSlider></div>
                
                {/* <div className="row">
                    <div className="col-3">
                        <CWelcome></CWelcome>
                    </div>
                    <div className="col-3">
                        <CPopular></CPopular>
                    </div>
                    <div className="col-3">
                        <CClothing></CClothing>
                    </div>
                    <div className="col-3">
                        <CDeals></CDeals>
                    </div>
                </div> */
                }

                <CWelcome></CWelcome>
                <CPopular></CPopular>
                <CClothing></CClothing>
                <CDeals></CDeals>
                <CFooter></CFooter>
                <ScrollUpButton />
            </div>
        );
    }
}


export default Main;