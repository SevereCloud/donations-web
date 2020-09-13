import React, { FunctionComponent, useState, useEffect } from 'react'
import {
    Separator,
    Text,
    Div,
    Header,
    Group,
    CardGrid,
    Card,
} from '@vkontakte/vkui';

import { moneyFormat } from '../../lib';

interface IStateProgressProps {
    label: string;
    donationProgress: number;
    donationNeed: number;
}

const StateProgress: FunctionComponent<IStateProgressProps> = ({
    label,
    donationProgress,
    donationNeed,
}: IStateProgressProps) => {
    const progress = Math.floor(donationProgress * 100 / donationNeed);
    const formattedNumber = (num: number) => `${moneyFormat(num)} ₽`;

    return (
        <Div>
            { (progress < 100) && (
                <>
                    <div className="progress-label">
                        <Text weight="regular" >{label}</Text>
                        {(progress > 70) && (
                            <Text
                                weight="semibold"
                                className="progress-inner-text"
                            >
                                {formattedNumber(donationNeed)}
                            </Text>
                        )}
                    </div>
                    <div className="progress">
                        <div
                            className="bar"
                            style={{ width: `${progress}%` }}
                        >
                            {(progress > 30) && (
                                <Text
                                    weight="semibold"
                                    className="bar-inner-text"
                                >
                                    {formattedNumber(donationProgress)}
                                </Text>
                            )}
                        </div>
                        <div className="progress-inner-text-container">
                            {(progress <= 30) && (
                                <Text
                                    weight="semibold"
                                    className="progress-inner-text-bar"
                                >
                                    {formattedNumber(donationProgress)}
                                </Text>
                            )}
                        </div>
                        <div className="progress-inner-text-container">
                            {(progress <= 70) && (
                                <Text
                                    weight="semibold"
                                    className="progress-inner-text"
                                >
                                    {formattedNumber(donationNeed)}
                                </Text>
                            )}
                        </div>
                    </div >
                </>
            )}
            {(progress >= 100) && (
                <>
                    <div className="progress-label">
                        <Text weight="regular" >{label}</Text>
                    </div>
                    <div className="progress">
                        <div
                            className="bar-finish"
                            style={{ width: `${progress}%` }}
                        >
                            <Text
                                weight="semibold"
                                className="bar-inner-text"
                            >
                                {formattedNumber(donationProgress) + ' собраны!'}
                            </Text>
                        </div>
                    </div>
                </>
            )}
        </Div>
    )
}

const ViewState: FunctionComponent = () => {
    const donationNeed = 10000;
    const [donationProgress, setDonationProgress] = useState(3000);
    useEffect(() => {
        if (donationProgress < donationNeed) {
            setTimeout(() => setDonationProgress((prevProgress) => (prevProgress + donationNeed * 0.01)), 600);
        } else {
            setDonationProgress(0);
        }
    });

    return (
        <Group
            separator="hide"
            header={<Header mode="secondary">states</Header>}
        >
            <CardGrid>
                <Card size="l" mode="shadow">
                    <StateProgress
                        label="Нужно собрать до 10 сентября"
                        donationNeed={10000}
                        donationProgress={5800}
                    />
                    <Separator style={{ margin: '2px 0 2px 0' }} />
                    <StateProgress
                        label="Нужно собрать до 10 сентября"
                        donationNeed={10000}
                        donationProgress={1300}
                    />
                    <Separator style={{ margin: '2px 0 2px 0' }} />
                    <StateProgress
                        label="Нужно собрать до 10 сентября"
                        donationNeed={donationNeed}
                        donationProgress={donationProgress}
                    />
                    <Separator style={{ margin: '2px 0 2px 0' }} />
                    <StateProgress
                        label="Нужно собрать до 10 сентября"
                        donationNeed={10000}
                        donationProgress={10000}
                    />
                    <Separator style={{ margin: '2px 0 2px 0' }} />
                    <StateProgress
                        label="Нужно собрать до 10 сентября"
                        donationNeed={10000}
                        donationProgress={9000}
                    />

                </Card>
            </CardGrid>
        </Group>
    );
};

export default ViewState;