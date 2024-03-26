import { Card } from "./Card.styled"
import { FaRegTrashCan } from "react-icons/fa6";
import { centsToReais } from '../../../../utils/functions';
import { ChangeEvent } from "react";

interface CartItemsCardProps {
  id: string | undefined
  title: string | undefined
  image: string | undefined
  description: string | undefined
  quantity: number | undefined
  price: number | undefined
  handleUpdateQuantity: (id: string, quantity: number) => void 
}

export const CartItemsCard = (props: CartItemsCardProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.handleUpdateQuantity(props.id ?? '', Number(e.target.value))
  }
  
  return(
    <Card>
      <img src={props.image} alt={props.title} />
      <div className="info">
        <div>
          <div>
            <h1>{props.title}</h1>
            <FaRegTrashCan size={24} />
          </div>
          <p className="description">{props.description}</p>
        </div>
        <div className="footer">
          <select value={props.quantity} onChange={(e) => handleChange(e)} >
            {
              Array
                .from({ length: 10 }, (_, index) => index + 1)
                .map((value) => (
                  <option key={value} value={value}>{value}</option>)
                )
            }
          </select>
          <p>{centsToReais(props.price ?? 0)}</p>
        </div>
      </div>
    </Card>
  )
}