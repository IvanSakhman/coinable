import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blurImage from '@images/placeholder-blur.png';
import { BackgroundOverlay, Container, Content, Grid, Title } from './recommended-list.styled';

export interface PreviewItemType {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

interface RecommendedListProps {
  items: PreviewItemType[];
}

const RecommendedList: React.FC<RecommendedListProps> = ({ items }) => {
  return (
    <Container>
      <Grid>
        {items.map((item) => (
          <Link href={`/${item.mal_id}`} key={item.mal_id}>
            <Content key={item.mal_id}>
              <BackgroundOverlay />
              <Image
                placeholder="blur"
                blurDataURL={blurImage.src}
                src={item.images.webp.image_url}
                objectFit="cover"
                layout="fill"
                alt="preview"
              />
              <Title>{item.title}</Title>
            </Content>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendedList;
