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
      <main onClick={toggle} className="charactersItem">
         <img className="img" src={item.image} alt={item.image} />
         <p className="name">{item.name}</p>
            <Modal active={active} toggle={toggle}>
               <div className='modal'>
                  <div className='gradient_modal'></div>
                     <img className="img_modal" src={item.image} alt={item.image} />
                     <div className="info_modal">
                        <ul className='info-left'>
                           <li className="name_modal">Name: <span className="content">{item.name}</span></li>
                           <li className="name_modal">Status: <span className="content">{item.status}</span></li>
                           <li className="name_modal">Species: <span className="content">{item.species}</span></li>
                        </ul>
                        <ul className='info-right'>
                           <li className="name_modal">Origin: <span className="content">{item.origin.name}</span></li>
                           <li className="name_modal">Location: <span className="content">{item.location.name}</span></li>
                           <li className="name_modal">Gender: <span className="content">{item.gender}</span></li>
                        </ul>
                     </div>
               </div>
            </Modal>
      </main>
   )
}

export default CharactersItem;