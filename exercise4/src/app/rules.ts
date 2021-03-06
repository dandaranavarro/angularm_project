import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

export let defineRules = (angularm: AngularmService) => {
  angularm
    .detr('list_entities', ListingTableComponent)
    .der('table_line', EntityLineComponent)
    .detr('create_form', CreateEntityComponent)
    .ptr('form_line', '*', 'code', null, FormLineComponent, {inputType: 'number'})
    .dptr('form_line', FormLineComponent, {inputType: 'text'})
    .der('show_entity', EntityDetailsComponent)
    .dpr('show_line', ShowLineComponent)
    .der('edit_form', EditEntityFormComponent)
    .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, {inputType: 'number'})
    .dpr('edit_form_line', EditFormLineComponent, {inputType: 'text'}); 
};
