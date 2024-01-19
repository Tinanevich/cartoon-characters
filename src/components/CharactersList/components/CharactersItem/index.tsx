import { FC } from 'react';
import { ICharacter } from 'types/ICharacter';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';

import './styles.scss'

interface ICharacterItemProps {
  item: ICharacter;
}

const CharactersItem: FC<ICharacterItemProps> = ({item})=> {
   const { active, toggle } = useModal();
   return (
      <div onClick={toggle} className="charactersItem">
         <img className="img" src={item.image} alt={item.image} />
         <p className="name">{item.name}</p>
            <Modal active={active} toggle={toggle}>
               <span className='modal'>
                  <div className='div_modal'>
                     <img className="img_modal" src={item.image} alt={item.image} />
                  </div>
                  <p className="info">
                     <ul className='info-left'>
                        <li className="name_modal">Name: <p className="content">{item.name}</p></li>
                        <li className="name_modal">Status: <p className="content">{item.status}</p></li>
                        <li className="name_modal">Species: <p className="content">{item.species}</p></li>
                     </ul>
                     <ul className='info-right'>
                        <li className="name_modal">Origin: <p className="content">{item.origin.name}</p></li>
                        <li className="name_modal">Location: <p className="content">{item.location.name}</p></li>
                        <li className="name_modal">Gender: <p className="content">{item.gender}</p></li>
                     </ul>
                  </p>
               </span>
            </Modal>
      </div>
   )
}

export default CharactersItem;