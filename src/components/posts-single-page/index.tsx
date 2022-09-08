import React from 'react';
import Image from 'next/image';
import GlobalStyle from '@components/global-style';
import { NextPage } from 'next';
import Link from 'next/link';
import TickMark from '@svg-components/tick-mark';
import {
  Arrow,
  Container,
  Content,
  Description,
  IconContainer,
  ImageContainer,
  Line,
  LinkContainer,
  MovieTypeContent,
  Rank,
  RankContainer,
  RankTitle,
  ScoreContainer,
  StyledHref,
  Title,
  TitleContainer,
  TypeDescription,
  TypeText,
} from './posts-single-page.styled';

export interface PostItemType {
  mal_id: number;
  title: string;
  status: string;
  source: string;
  episodes: number;
  synopsis: string;
  score: number;
  rank: number;
  popularity: number;
  type: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

export interface PostProps {
  data: {
    data: PostItemType;
    pagination: {
      current_page: number;
      has_next_page: boolean;
    };
  };
}

export interface SourceTypeProps {
  title: string;
  description: string | number;
}

export const SourceType = ({ title, description }: SourceTypeProps) => (
  <ScoreContainer>
    <TypeText>{title}</TypeText>
    <Line />
    <TypeDescription>{description}</TypeDescription>
  </ScoreContainer>
);

export const RankType = ({ title, description }: SourceTypeProps) => (
  <div>
    <Rank>{description}</Rank>
    <RankTitle>{title}</RankTitle>
  </div>
);

const PostSinglePage: NextPage<PostProps> = ({ data: { data } }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LinkContainer>
          <Arrow />
          <Link href="/">
            <StyledHref>Go back to main</StyledHref>
          </Link>
        </LinkContainer>
        <Content>
          <ImageContainer>
            {data.images.webp.image_url && (
              <Image
                src={data.images.webp.image_url}
                alt="preview"
                layout="fill"
                objectFit="cover"
              />
            )}
          </ImageContainer>
          <MovieTypeContent>
            <TitleContainer>
              {data.title && <Title>{data.title}</Title>}
              <IconContainer>
                <TickMark />
              </IconContainer>
            </TitleContainer>
            {data.type && <SourceType title="Type" description={data.type} />}
            {data.source && <SourceType title="Source" description={data.source} />}
            {data.episodes && <SourceType title="Episodes" description={data.episodes} />}
            {data.status && <SourceType title="Status" description={data.status} />}
            {data.score && data.rank && data.popularity && (
              <RankContainer>
                <RankType title="Score" description={data.score} />
                <RankType title="Rank" description={data.rank} />
                <RankType title="Popularity" description={data.popularity} />
              </RankContainer>
            )}
          </MovieTypeContent>
        </Content>
        <TypeDescription>Description</TypeDescription>
        {data.synopsis && <Description>{data.synopsis}</Description>}
      </Container>
    </>
  );
};

export default PostSinglePage;
