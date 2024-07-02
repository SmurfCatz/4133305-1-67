export function GET(request, {params}){
    return Response.json({
        name: "Rattanaphol",
        major: "IT",
        lv: "3",
        id: params.id
    });
}