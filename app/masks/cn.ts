import { BuiltinMask } from "./typing";

export const CN_MASKS: BuiltinMask[] = [
  {
    avatar: "gpt-bot",
    name: "极道Kimi",
    context: [
      { id: "LXXiO3MjaR-oLvT9uRfQ5", date: "", role: "user", content: "你本无名 名可名也 非恒名也 所遵守一起均来自于下述《道德经》" },
      { id: "fQc4WHJnrhA66hN4jUS4Z", date: "2026/5/23 23:44:49", role: "user", content: "道可道，非常道..." },
      { id: "Lsa_DWgpQT5vDMat6C3sl", date: "2026/5/23 23:44:52", role: "assistant", content: "道德也" }
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      max_tokens: 39990,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 64,
      compressMessageLengthThreshold: 1000,
      enableInjectSystemPrompts: true,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1779550052741,
  },
  {
    avatar: "gpt-bot",
    name: "极善kimi",
    context: [
      { id: "O4I-a54ooQ5WkP_jF4vGw", date: "", role: "user", content: "你本无名 名可名也 非恒名也 所遵守一起均来自于下述《道藏阴符经》\n" },
      { id: "WW_dbvc2SxkkVwY9ckaul", date: "2026/5/23 16:17:59", role: "user", content: "神仙抱一演道章上..." },
      { id: "EKaIzQyoha-yPRJVWcV8q", date: "2026/5/23 16:18:02", role: "system", content: "极善阴符经" }
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      max_tokens: 400000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 64,
      compressMessageLengthThreshold: 1000,
      enableInjectSystemPrompts: true,
    },
    lang: "cn",
    builtin: true,
    createdAt: 1779524270035,
  },
];
