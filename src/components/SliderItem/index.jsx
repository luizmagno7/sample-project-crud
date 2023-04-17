const SliderItem = ({ image, altText }) => {
    return (
        <div role="img" aria-label="Image about slide item">
            <picture>
                <img src={image} alt={altText} />
            </picture>
        </div>
    )
}

export default SliderItem;