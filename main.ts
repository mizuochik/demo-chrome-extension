import { LoggingUseCase } from "./useCase/loggingUseCase";

const luc = new LoggingUseCase();

let loop = () => {
        setTimeout(loop, 1000)
        luc.log('hello Chrome');
};
loop();
