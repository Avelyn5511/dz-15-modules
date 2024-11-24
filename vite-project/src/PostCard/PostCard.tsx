import React, { useState } from "react";
import styled from "styled-components";

interface PostCardProps {
  title: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const PostTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Menu = styled.ul<{ show: boolean }>`
  position: absolute;
  right: 0;
  top: 30px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 8px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.show ? "block" : "none")};
`;

const MenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Star = styled.span`
  position: absolute;
  top: -5px;
  left: 350px;
  font-size: 24px;
  color: gold;
`;

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  isFavorite,
  onEdit,
  onDelete,
  onFavorite,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Card>
      <MenuContainer>
        {isFavorite && <Star>★</Star>}
        <MenuButton onClick={toggleMenu}>⋮</MenuButton>
        <Menu show={showMenu}>
          <MenuItem onClick={onEdit}>Редактировать</MenuItem>
          <MenuItem onClick={onDelete}>Удалить</MenuItem>
          <MenuItem onClick={onFavorite}>
            {isFavorite ? "Удалить из избранного" : "В избранное"}
          </MenuItem>
        </Menu>
      </MenuContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
    </Card>
  );
};

export default PostCard;
