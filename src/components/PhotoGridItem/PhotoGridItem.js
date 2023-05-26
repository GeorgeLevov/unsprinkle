import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
    let srcJPG = `${src}.jpg`;
    let srcJPG2X = `${src}@2x.jpg`;
    let srcJPG3X = `${src}@3x.jpg`;
    let srcAVIF = `${src}.avif`;
    let srcAVIF2X = `${src}@2x.jpg`;
    let srcAVIF3X = `${src}@3x.jpg`;

    return (
        <article>
            <Anchor href={`/photos/${id}`}>
                <picture>
                    <source
                        type="image/avif"
                        srcSet={`
												${srcAVIF} 1x,
												${srcAVIF2X} 2x,
												${srcAVIF3X} 3x`}
                    />
                    <source
                        type="image/jpg"
                        srcSet={`
												${srcJPG} 1x,
												${srcJPG2X} 2x,
												${srcJPG3X} 3x`}
                    />
                    <Image alt="Cute Animal | Image" src={srcJPG} />
                </picture>
            </Anchor>
            <Tags>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
        </article>
    );
};

const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
    outline-offset: 4px;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
    object-fit: cover;
`;

const Tags = styled.ul`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 8px 0px;
`;

const Tag = styled.li`
    display: inline;

    padding: 4px 8px;
    background: var(--color-gray-300);
    font-size: 0.875rem;
    font-weight: 475;
    color: var(--color-gray-800);

    &:not(:first-of-type) {
        margin-left: 8px;
    }
`;

export default PhotoGridItem;
