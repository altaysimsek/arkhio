export const categoryMapper = (categoryId: number) => {
    switch (categoryId) {
        case 1:
            return 'UI';
        case 2:
            return 'Code';
        case 3:
            return 'Design';
        case 4:
            return 'Icon';
        case 5:
            return 'Extension';
    }
}