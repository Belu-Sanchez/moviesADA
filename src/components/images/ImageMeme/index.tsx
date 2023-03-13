import './styles.scss';

const ImageMeme = () => {
    return (
        <div className="img" >
            <div className='imagen' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + '/img/meme-01.png'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '450px'
            }}>
            </div>
        </div>

    );
}

export { ImageMeme }