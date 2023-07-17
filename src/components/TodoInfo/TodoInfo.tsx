import cn from 'classnames';

import { Todo } from '../../services/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id={todo.id}
      className={cn('TodoInfo', todo.completed && 'TodoInfo--completed')}
    >
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      <UserInfo
        user={todo.user}
      />
    </article>
  );
};
