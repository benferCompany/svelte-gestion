export const deleteObject = (objects, id)=>{
    objects = objects.filter(
        (objeto) =>
            objeto.id !== id,
    );
    return objects;
}