import * as React from 'react';
import styled, { ThemeContext } from 'styled-components';
import Section, { BgMode } from 'components/base/Section';
import { HeadlineTag } from 'components/typography/Heading';
import { spacings, mq, getColors as color, withRange } from 'utils/styles';
import Textfield, { FormProps } from 'components/fields/Textfield';
import Textarea from 'components/fields/Textarea';
import Checkbox from 'components/fields/Checkbox';
import Wrapper from 'components/base/Wrapper';
import Intro from 'components/blocks/Intro';

const StyledIntro = styled(Intro)`
    ${withRange([spacings.spacer * 2, spacings.spacer * 3], 'padding-bottom')}
`;

const FormContainer = styled.form`
    padding-bottom: 30px;

    & > * > * + * {
        padding-top: 30px;
    }

    @media ${mq.medium} {
        display: flex;
        flex-direction: row;
        align-items: top;
    }

    @media ${mq.semilarge} {
        width: 70%;
    }
`;

const FlexContainer = styled.div`
    flex: 1 0 50%;
    width: 100%;

    & + & {
        padding-top: 30px;
    }

    @media ${mq.medium} {
        & + & {
            padding-top: 0;
            padding-left: 30px;
        }
    }
`;

const ActionWrapper = styled.div`
    margin-top: ${spacings.spacer * 3}px;
`;

const Form: React.FC<{
    title?: string;
    titleAs?: HeadlineTag;
    superTitle?: string;
    superTitleAs?: HeadlineTag;
    text?: string;

    primaryAction?: (isInverted?: boolean) => React.ReactNode;
    secondaryAction?: (isInverted?: boolean) => React.ReactNode;
    submitAction?: (props: {
        isInverted?: boolean;
        additionalProps: { type: string; as: 'button' | 'a' };
    }) => React.ReactNode;

    isInverted?: boolean;
    bgMode?: BgMode;

    formFields: {
        name?: FormProps;
        surname?: FormProps;
        mail?: FormProps;
        phone?: FormProps;
        area?: FormProps;
    };

    checkbox?: {
        label?: string;

        name?: string;
        value?: string;

        isDisabled?: boolean;
    };
}> = ({
    bgMode,
    isInverted = false,
    title,
    titleAs,
    superTitle,
    superTitleAs,
    text,
    primaryAction,
    secondaryAction,
    submitAction,
    formFields,
    checkbox,
}) => {
    const theme = React.useContext(ThemeContext);
    const [isSelected, setIsSelected] = React.useState(false);

    return (
        <Section
            addSeperation
            bgColor={
                isInverted
                    ? color(theme).dark
                    : bgMode
                    ? color(theme).mono.light
                    : 'transparent'
            }
            bgMode={!isInverted ? bgMode : undefined}
        >
            <Wrapper clampWidth="normal" addWhitespace>
                {title && (
                    <StyledIntro
                        title={title}
                        titleAs={titleAs}
                        superTitle={superTitle}
                        superTitleAs={superTitleAs}
                        text={text}
                        primaryAction={primaryAction}
                        secondaryAction={secondaryAction}
                        isInverted={isInverted}
                    />
                )}
                <FormContainer>
                    <FlexContainer>
                        <Textfield
                            label={formFields.name?.label || 'Vorname'}
                            placeholder={formFields.name?.placeholder}
                            infoMessage={formFields.name?.infoMessage}
                            value={formFields.name?.value}
                            name={formFields.name?.name || ''}
                            isRequired={formFields.name?.isRequired}
                            errorMessage={formFields.name?.errorMessage}
                            optionalLabel={formFields.name?.optionalLabel}
                            isInverted={isInverted}
                        />
                        <Textfield
                            label={formFields.surname?.label || 'Nachname'}
                            placeholder={formFields.surname?.placeholder}
                            infoMessage={formFields.surname?.infoMessage}
                            value={formFields.surname?.value}
                            name={formFields.surname?.name || ''}
                            isRequired={formFields.surname?.isRequired}
                            errorMessage={formFields.surname?.errorMessage}
                            optionalLabel={formFields.name?.optionalLabel}
                            isInverted={isInverted}
                        />
                        <Textfield
                            type="email"
                            label={formFields.mail?.label || 'E-Mail'}
                            placeholder={formFields.mail?.placeholder}
                            infoMessage={formFields.mail?.infoMessage}
                            value={formFields.mail?.value}
                            name={formFields.mail?.name || ''}
                            isRequired={formFields.mail?.isRequired}
                            errorMessage={formFields.mail?.errorMessage}
                            optionalLabel={formFields.name?.optionalLabel}
                            isInverted={isInverted}
                        />
                        <Textfield
                            type="tel"
                            label={formFields.phone?.label || 'Telefon'}
                            placeholder={formFields.phone?.placeholder}
                            infoMessage={formFields.phone?.infoMessage}
                            value={formFields.phone?.value}
                            name={formFields.phone?.name || ''}
                            isRequired={formFields.phone?.isRequired}
                            errorMessage={formFields.phone?.errorMessage}
                            optionalLabel={formFields.name?.optionalLabel}
                            isInverted={isInverted}
                        />
                    </FlexContainer>
                    <FlexContainer>
                        <Textarea
                            label={formFields.area?.label || 'Textfeld'}
                            placeholder={formFields.area?.placeholder}
                            infoMessage={formFields.area?.infoMessage}
                            value={formFields.area?.value}
                            name={formFields.area?.name}
                            isRequired={formFields.area?.isRequired}
                            errorMessage={formFields.area?.errorMessage}
                            optionalLabel={formFields.name?.optionalLabel}
                            isInverted={isInverted}
                        />
                    </FlexContainer>
                </FormContainer>
                {checkbox && (
                    <Checkbox
                        onChange={() =>
                            !isSelected
                                ? setIsSelected(true)
                                : setIsSelected(false)
                        }
                        isSelected={isSelected}
                        isDisabled={checkbox.isDisabled}
                        value={checkbox.value}
                        name={checkbox.name}
                        label={
                            checkbox.label ||
                            'Ich habe die Datenschutzbestimmungen zu Kenntnis genommen und aktzeptiere.'
                        }
                        isInverted={isInverted}
                        isRequired
                    />
                )}
                {submitAction && (
                    <ActionWrapper>
                        {submitAction &&
                            submitAction({
                                isInverted,
                                additionalProps: {
                                    type: 'submit',
                                    as: 'button',
                                },
                            })}
                    </ActionWrapper>
                )}
            </Wrapper>
        </Section>
    );
};

export default Form;
