import iconFacebook from "../assets/facebook.svg"
import iconInstagram from "../assets/instagram.svg"


export const SocialMedia = () => {
  return (
    <div>
        <a href="https://www.facebook.com" target="blank">
            <img src={iconFacebook} alt="" />        

        </a>

        <a href="https://www.instagram.com" target="blank">
            <img src={iconInstagram} alt="" />

        </a>
    </div>
  )
}
