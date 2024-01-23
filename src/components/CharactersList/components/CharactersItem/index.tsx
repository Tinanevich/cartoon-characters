import { FC } from 'react';
import { ICharacter } from 'types/ICharacter';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';

import './styles.scss';

interface ICharacterItemProps {
  item: ICharacter;
}

const CharactersItem: FC<ICharacterItemProps> = ({ item }) => {
  const { active, toggle } = useModal();
  return (
    <main onClick={toggle} className="charactersItem">
      <img className="charactersItem_img" src={item.image} alt={item.image} />
      <p className="charactersItem_name">{item.name}</p>
      <Modal active={active} toggle={toggle}>
        <div className="charactersItem_modal">
          <div className="charactersItem_modal_gradient"></div>
          <img className="charactersItem_modal_img" src={item.image} alt={item.image} />
          <div className="charactersItem_modal_info">
            <ul className="charactersItem_modal_info_left">
              <li className="info_name">
                Name: <span className="info_content">{item.name}</span>
              </li>
              <li className="info_name">
                Status: <span className="info_content">{item.status}</span>
              </li>
              <li className="info_name">
                Species: <span className="info_content">{item.species}</span>
              </li>
            </ul>
            <ul className="charactersItem_modal_info_right">
              <li className="info_name">
                Origin: <span className="info_content">{item.origin.name}</span>
              </li>
              <li className="info_name">
                Location: <span className="info_content">{item.location.name}</span>
              </li>
              <li className="info_name">
                Gender: <span className="info_content">{item.gender}</span>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default CharactersItem;