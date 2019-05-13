import createContext, { Context } from 'create-react-context';

export interface ConfigConsumerProps {
    getPrefixCls: (prefix: string) => string;
}

const ConfigContext: Context<ConfigConsumerProps> = createContext({
    getPrefixCls: (prefix: string) => {
        return 'ant-' + prefix;
    }
});

export const ConfigConsumer = ConfigContext.Consumer;

export default ConfigContext;