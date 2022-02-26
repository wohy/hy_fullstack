import React, { Component,useState } from "react";

import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default class FormComp extends Component {
  constructor() {
    super();
    this.state = {};
    this.myRef = React.createRef() 
  }
  render() {
    const { Option } = Select;

    const residences = [
      {
        value: "zhejiang",
        label: "Zhejiang",
        children: [
          {
            value: "hangzhou",
            label: "Hangzhou",
            children: [
              {
                value: "xihu",
                label: "West Lake"
              }
            ]
          }
        ]
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men"
              }
            ]
          }
        ]
      }
    ];
    
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const PriceInput = ({ value = {}, onChange, id }) => {
      const [number, setNumber] = useState(0);
      const [currency, setCurrency] = useState("rmb");
    
      const triggerChange = (changedValue) => {
        if (onChange) {
          onChange({
            number,
            currency,
            ...value,
            ...changedValue
          });
        }
      };
    
      const onNumberChange = (e) => {
        const newNumber = parseInt(e.target.value || 0, 10);
    
        if (Number.isNaN(number)) {
          return;
        }
    
        if (!("number" in value)) {
          setNumber(newNumber);
        }
    
        triggerChange({
          number: newNumber
        });
      };
    
      const onCurrencyChange = (newCurrency) => {
        if (!("currency" in value)) {
          setCurrency(newCurrency);
        }
    
        triggerChange({
          currency: newCurrency
        });
      };
    
      return (
        <span id={id}>
          <Input
            type="text"
            value={value.number || number}
            onChange={onNumberChange}
            style={{
              width: 100
            }}
          />
          <Select
            value={value.currency || currency}
            style={{
              width: 80,
              margin: "0 8px"
            }}
            onChange={onCurrencyChange}
          >
            <Option value="rmb">RMB</Option>
            <Option value="dollar">Dollar</Option>
          </Select>
        </span>
      );
    };
    
    const RegistrationForm = () => {
      const [form] = Form.useForm();
    
      const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };
    
      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
    
      const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    
      const onWebsiteChange = (value) => {
        if (!value) {
          setAutoCompleteResult([]);
        } else {
          setAutoCompleteResult(
            [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
          );
        }
      };
    
      const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website
      }));
    
      const checkPrice = (rule, value) => {
        if (value && value.number) {
          return Promise.resolve();
        }
    
        return Promise.reject("Price must be greater than zero!");
      };
      return (
        <div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86"
            }}
            scrollToFirstError
          >
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  validator: checkPrice
                }
              ]}
            >
              <PriceInput />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <div style={{height:"1000px"}}></div>
            <Form.Item
              name="email2"
              label="E-mail2"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email3"
              label="E-mail3"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  }
                })
              ]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              name="nickname"
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true
                }
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              name="residence"
              label="Habitual Residence"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your habitual residence!"
                }
              ]}
            >
              <Cascader options={residences} />
            </Form.Item>
      
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: "Please input your phone number!" }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>
      
            <Form.Item
              name="website"
              label="Website"
              rules={[{ required: true, message: "Please input website!" }]}
            >
              <AutoComplete
                options={websiteOptions}
                onChange={onWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            </Form.Item>
      
            <Form.Item
              label="Captcha"
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  <Form.Item
                    name="captcha"
                    noStyle
                    rules={[
                      { required: true, message: "Please input the captcha you got!" }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </Form.Item>
      
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement")
                }
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <div style={{height:"1000px"}}></div>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
          
      );
    }
    return (<RegistrationForm />)
  }
}
