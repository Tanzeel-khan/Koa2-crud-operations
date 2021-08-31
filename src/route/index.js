import Router from 'koa-router';
import koa from 'koa'
import * as ctr from '../controller/index.js';
import bodyparser from 'koa-bodyparser';

const app = new koa();

const router = new Router({
    prefix: '/api/v1/todos',
  });


router.get('/',ctr.read);
router.post('/add',ctr.add);
router.patch('/update',ctr.update);
router.delete('/delete',ctr.remove);


app.use(bodyparser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('app is started on port 3000')
});