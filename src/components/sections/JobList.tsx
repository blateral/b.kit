import Grid from 'components/base/Grid';
import Section, { mapToBgMode } from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import JobCard, { JobCardProps } from 'components/blocks/JobCard';
import React from 'react';
import { useLibTheme } from 'utils/LibThemeProvider';
import { useEqualSheetHeight } from 'utils/useEqualSheetHeight';

const JobList: React.FC<{
    anchorId?: string;
    jobs: JobCardProps[];
    bgMode?: 'full' | 'inverted';
}> = ({ anchorId, jobs, bgMode }) => {
    const { colors } = useLibTheme();

    const isInverted = bgMode === 'inverted';

    const jobCount = jobs.length || 0;

    const { sheetRefs: cardRefs } = useEqualSheetHeight<HTMLDivElement>({
        listLength: jobCount,
        identifiers: ['[data-sheet="title"]', '[data-sheet="info"]'],
        responsive: {
            small: 1,
            medium: 1,
            semilarge: 2,
            large: 3,
            xlarge: 3,
        },
    });
    return (
        <Section
            addSeperation
            anchorId={anchorId}
            bgColor={
                isInverted
                    ? colors.sectionBg.dark
                    : bgMode
                    ? colors.sectionBg.medium
                    : colors.sectionBg.light
            }
            bgMode={mapToBgMode(bgMode)}
        >
            <Wrapper addWhitespace>
                <Grid.Row>
                    {jobs.map((job, i) => (
                        <Grid.Col
                            semilarge={{ span: 6 / 12 }}
                            large={{
                                span: 4 / 12,
                                move: 0,
                            }}
                            key={i}
                        >
                            <JobCard ref={cardRefs[i]} {...job} />
                        </Grid.Col>
                    ))}
                </Grid.Row>
            </Wrapper>
        </Section>
    );
};

export default JobList;
