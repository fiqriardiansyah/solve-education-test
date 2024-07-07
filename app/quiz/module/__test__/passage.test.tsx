import { ContextQuizProvider, defaultState } from '@/app/context/context-quiz';
import questionData from "@/public/question_data.json";
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Passage from '../passage';

const renderWithContext = (ui: any, { providerProps, ...renderOptions }: any) => {
    return render(
        <ContextQuizProvider {...providerProps}>{ui}</ContextQuizProvider>,
        renderOptions
    );
};

describe('Passage page/component', () => {
    test('render passage with question 1 ', () => {
        const { getByText } = renderWithContext(<Passage />, {
            providerProps: { ...defaultState, questionProgress: 0 }
        });
        expect(getByText(questionData[0].question_data.passage)).toBeInTheDocument();
    });

    test('render passage with question 2 ', () => {
        const { getByText } = renderWithContext(<Passage />, {
            providerProps: { ...defaultState, questionProgress: 1 }
        });
        expect(getByText(questionData[1].question_data.passage)).toBeInTheDocument();
    });
});