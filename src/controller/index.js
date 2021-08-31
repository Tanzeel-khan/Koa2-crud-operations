
import * as services from '../service/index.js';

export const read = async (ctx,next) =>{
  ctx.body = await services.getTodos();
  await next();
} 

export const add = async (ctx,next) =>{
  let uin = ctx.request.body;
  ctx.body = await services.addTodos(uin);
  await next();
}

export const update = async (ctx,next) =>{
  let uin = ctx.request.body;
  ctx.body = await services.updatetodo(uin);
  await next();
}

export const remove = async (ctx,next) =>{
  let uin = ctx.request.body;
  ctx.body = await services.deleteTodo(uin);
  await next();
}
