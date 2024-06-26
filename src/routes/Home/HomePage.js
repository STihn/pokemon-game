import React from 'react';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import Footer from '../../components/Footer/Footer';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import backgroundPokemon from '../../assets/background-pokemon.jpeg';
import pokemon from '../../assets/pokemons.json';
import style from './style.module.css';


export const HomePage = ({ onClick }) => {

    const handleClickButton = (page) => {
        console.log('handleClickButton', onClick, page);
        onClick(page);
    };

    return (
        <React.Fragment>
            <MenuHeader />
            <Header
                title={'this is title Header'}
                descr={'this is description'}
                onClick={handleClickButton} />
            <Layout
                title={'this is title'}
                urlBg={backgroundPokemon}
            >
                {<p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                    To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                    If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
                    If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>}
            </Layout>
            <Layout
                title={'this is title'}
                colorBg={'#e2e2e2'}
            >
                <div className={style.flex}>
                    {pokemon.map((item) => <PokemonCard options={item} />)}
                </div>
            </Layout>
            <Layout
                title={'this is title'}
                urlBg={backgroundPokemon}
            >
                {<p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color.
                    To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                    If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
                    If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>}
            </Layout>
            <Footer />
        </React.Fragment>
    );
};
