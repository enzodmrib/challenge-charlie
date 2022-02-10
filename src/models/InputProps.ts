export interface IInputProps {
    handleInputChange: (inputText: React.ChangeEvent<HTMLInputElement>) =>void; 
    getWeatherData: () => Promise<void>;
}