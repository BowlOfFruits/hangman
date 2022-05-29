import error0 from "../images/0.jpg";
import error1 from "../images/1.jpg";
import error2 from "../images/2.jpg";
import error3 from "../images/3.jpg";
import error4 from "../images/4.jpg";
import error5 from "../images/5.jpg";
import error6 from "../images/6.jpg";

const Figure = ({ wrongCount }) => {
  const images = [error0, error1, error2, error3, error4, error5, error6];

    return (
        <img src={images[wrongCount]} alt="" />
    )
}

export default Figure;