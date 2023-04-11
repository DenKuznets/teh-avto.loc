<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'new' => $this->new,
            'sale' => $this->sale,
            'count' => $this->count,
            'price' => $this->price,
            'discount' => $this->discount,
            'specifications' => $this->specifications,
            'text' => $this->text,
            'view_status' => $this->view_status,
            'order_status' => $this->order_status,
            'views' => $this->views,
            'brand_id' => $this->brand_id,
            'category' => new CategoryResource($this->category),
            'card_img' => $this->imageUrl,
            'parent_categories' => $this->parentCategories($this->category),

        ];
    }
}
