import { PiArrowUUpLeftBold } from "react-icons/pi";
import { GoBackBtnContainer } from "./GoBackBtnContainer.styled";
import { useRouter } from "next/navigation";

export const GoBackBtn = () => {
  const { push } = useRouter()
  
  const handleGoBack = () => {
    push('/')
  }

  return(
    <GoBackBtnContainer onClick={() => handleGoBack()}>
      <PiArrowUUpLeftBold />
      Voltar
    </GoBackBtnContainer>
  )
}