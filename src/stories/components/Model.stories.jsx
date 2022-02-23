
import React from 'react';

import { Model } from '../../components/Model';

export default {
    title: 'Components/Folder/Model',
    component: Model,
};

const Template = args => <Model {...args} /> 

export const SuccessModel = Template.bind({});
SuccessModel.args = { children: <h1>Message Model</h1>, type: 'success' }

export const WarningModel = Template.bind({});
WarningModel.args = { children: <h1>Status Message</h1>, type: 'warning' }

export const DangerModel = Template.bind({});
DangerModel.args = { children: <h1>Status Message</h1>, type: 'danger' }